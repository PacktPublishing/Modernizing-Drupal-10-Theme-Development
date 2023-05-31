<?php

namespace Drupal\alps_weather\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\alps_weather\WeatherClientInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a forecast block.
 *
 * @Block(
 *   id = "alps_weather_forecast",
 *   label = @Translation("Forecast"),
 *   admin_label = @Translation("Forecast"),
 *   category = @Translation("Custom"),
 *   context_definitions = {
 *     "node" = @ContextDefinition("entity:node", label = @Translation("Node"))
 *   }
 * )
 */
class ForecastBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Constructs a new ForecastBlock instance.
   *
   * @param array $configuration
   *   The plugin configuration, i.e. an array with configuration values keyed
   *   by configuration option name. The special key 'context' may be used to
   *   initialize the defined contexts by setting it to an array of context
   *   values keyed by context names.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\alps_weather\WeatherClientInterface $weatherClient
   *   The alps_weather.weather_client service.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config
   *   The config.factory service.
   */
  public function __construct(
    array $configuration,
    $plugin_id,
    $plugin_definition,
    private readonly WeatherClientInterface $weatherClient,
    private readonly ConfigFactoryInterface $config,
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition): static {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('alps_weather.weather_client'),
      $container->get('config.factory')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    $node = $this->getContextValue('node');
    $city = $node->get('field_origin')->value;

    $forecast = $this->weatherClient->getForecastData($city);

    $build['content'] = [
      '#theme' => 'alps_weather_forecast_single',
      '#forecast' => $forecast['list'][0],
      '#city' => $city,
      '#units' => $this->config->get('alps_weather.settings')->get('units'),
      '#cache' => [
        'max-age' => 10800,
        'tags' => [
          'forecast:' . $city,
        ],
      ],
      '#attached' => [
        'library' => [
          'alps_weather/base',
        ],
      ],
    ];

    return $build;
  }

}
