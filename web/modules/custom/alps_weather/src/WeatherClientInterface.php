<?php

namespace Drupal\alps_weather;

/**
 * Interface WeatherClientInterface.
 */
interface WeatherClientInterface {

  /**
   * Get forecast data.
   *
   * @param string $city
   *   The city name.
   *
   * @return array
   *   The weather data.
   */
  public function getForecastData(string $city): array;

  /**
   * @param string $city
   * @param string $date
   *
   * @return array
   */
  public function getForecastDetail(string $city, string $date): array;

}
