<?php

namespace Drupal\alps_weather;

use Drupal\Core\Config\ConfigFactoryInterface;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\GuzzleException;
use Psr\Log\LoggerInterface;

/**
 * Class WeatherClient.
 */
class WeatherClient implements WeatherClientInterface {

  /**
   * Constructs a new WeatherClient object.
   *
   * @param \GuzzleHttp\ClientInterface $httpClient
   *   The HTTP client.
   * @param \Psr\Log\LoggerInterface $loggerFactory
   *   The logger factory.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $configFactory
   *   The config factory.
   */
  public function __construct(
    private readonly ClientInterface $httpClient,
    private readonly LoggerInterface $loggerFactory,
    private readonly ConfigFactoryInterface $configFactory
    ) {
  }

  /**
   * {@inheritdoc}
   */
  public function getForecastData(string $city): array {
    $config = $this->configFactory->get('alps_weather.settings');
    $api_key = $config->get('api_key');
    $url = $config->get('url');
    $units = $config->get('units');
    $cnt = $config->get('cnt');

    try {
      $response = $this->httpClient->request('GET', $url, [
        'query' => [
          'q' => $city,
          'appid' => $api_key,
          'units' => $units,
          'cnt' => $cnt,
        ],
      ]);

      $data = json_decode($response->getBody(), TRUE);

      if ($data['cod'] == 200) {
        return $data;
      }
      else {
        $this
          ->loggerFactory
          ->error('Error retrieving weather data for city @city', ['@city' => $city]);

        return [];
      }
    }
    catch (GuzzleException $e) {
      $this
        ->loggerFactory
        ->error('Error retrieving weather data for city @city', ['@city' => $city]);

      return [];
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getForecastDetail(string $city, string $date): array {
    $forecast = $this->getForecastData($city);

    $detail = array_filter($forecast['list'], function ($item) use ($date) {
      return $item['dt_txt'] == $date;
    });

    return array_shift($detail);
  }

}
