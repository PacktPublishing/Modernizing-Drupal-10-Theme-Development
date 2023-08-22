<?php

namespace Drupal\alps_weather\Controller;

use Drupal\alps_weather\WeatherClientInterface;
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Returns responses for Weather routes.
 */
class ForecastController extends ControllerBase {

  /**
   * The controller constructor.
   *
   * @param \Drupal\alps_weather\WeatherClientInterface $weatherClient
   *   The alps_weather.weather_client service.
   */
  public function __construct(
    private readonly WeatherClientInterface $weatherClient,
  ) {
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container): self {
    return new static(
      $container->get('alps_weather.weather_client'),
    );
  }

  /**
   * Return a render array with full forecast data for the next 5 days.
   *
   * @param string $city
   *
   * @return array
   */
  public function page(string $city): array {
    $forecast = $this->weatherClient->getForecastData($city);

    $build['content'] = [
      '#theme' => 'alps_weather_forecast',
      '#forecast' => $forecast,
      '#units' => $this->config('alps_weather.settings')->get('units'),
      '#cache' => [
        'max-age' => 10800,
        'tags' => [
          'forecast:' . $city,
        ],
        'contexts' => [
          'url.path',
        ],
      ],
      '#attached' => [
        'library' => [
          'alps_weather/base',
        ],
        'drupalSettings' => [
          'alps_weather' => [
            'message' => 'Hello from the render array!',
          ],
        ],
      ],
    ];

    return $build;
  }

  /**
   * Return a render array with details for a specific day and time.
   *
   * @param string $city
   * @param string $date
   *
   * @return array
   */
  public function details(string $city, string $date): array {
    $forecast = $this->weatherClient->getForecastDetail($city, $date);

    $build['content'] = [
      '#theme' => 'alps_weather_details',
      '#forecast' => $forecast,
      '#units' => $this->config('alps_weather.settings')->get('units'),
      '#cache' => [
        'max-age' => 10800,
        'tags' => [
          'forecast:' . $city,
        ],
      ],
    ];

    return $build;
  }

}
