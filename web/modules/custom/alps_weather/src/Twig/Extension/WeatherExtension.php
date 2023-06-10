<?php

declare(strict_types=1);

namespace Drupal\alps_weather\Twig\Extension;

use Drupal\alps_weather\WeatherClientInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Template\TwigEnvironment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * A Twig extension for the Alps Weather module.
 */
class WeatherExtension extends AbstractExtension {

  /**
   * WeatherExtension constructor.
   *
   * @param \Drupal\alps_weather\WeatherClientInterface $weatherClient
   *   The weather client.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config
   *   The config factory.
   */
  public function __construct(
    private readonly WeatherClientInterface $weatherClient,
    private readonly ConfigFactoryInterface $config,
  ) {
  }

  /**
   * {@inheritdoc}
   */
  public function getFunctions(): array {
    return [
      new TwigFunction(
        'weather',
        [$this, 'weather'],
        [
          'needs_environment' => TRUE,
          'needs_context' => TRUE,
          'is_safe' => ['html'],
          'is_variadic' => FALSE,
          'deprecated' => FALSE,
          'alternative' => NULL,
        ]
      ),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFilters(): array {
    return [
      new TwigFilter(
        'celsius_to_fahrenheit',
        [$this, 'celsiusToFahrenheit']
      ),
    ];
  }

  /**
   * Returns the weather forecast for a given city.
   *
   * @return array
   *   The weather forecast as a render array.
   */
  public function weather(TwigEnvironment $env, $context, string $city): array {
    $forecast = $this->weatherClient->getForecastData($city);

    $build['content'] = [
      '#theme' => 'alps_weather_forecast',
      '#forecast' => $forecast,
      '#units' => $this->config->get('alps_weather.settings')->get('units'),
      '#cache' => [
        'max-age' => 10800,
        'tags' => [
          'forecast:' . $city,
        ],
        'contexts' => [
          'url.path',
        ],
      ],
    ];

    return $build;
  }

  /**
   * Converts a temperature from Celsius to Fahrenheit.
   *
   * @param float $celsius
   *   The temperature in Celsius.
   *
   * @return float
   *   The temperature in Fahrenheit.
   */
  public function celsiusToFahrenheit(
    float $celsius
  ): float {
    return $celsius * 1.8 + 32;
  }

}
