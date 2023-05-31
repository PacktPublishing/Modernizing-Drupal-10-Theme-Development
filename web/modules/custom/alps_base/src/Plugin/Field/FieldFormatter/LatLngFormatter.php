<?php

namespace Drupal\alps_base\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;

/**
 * Plugin implementation of the 'lat_lng' formatter.
 *
 * @FieldFormatter(
 *   id = "lat_lng",
 *   label = @Translation("Lat Lng formatter"),
 *   description = @Translation("Display a map with a
 *   marker on lat lng coordinates."),
 *   field_types = {
 *     "string"
 *   }
 * )
 */
class LatLngFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode): array {
    $elements = [];

    foreach ($items as $delta => $item) {
      $label = $items->getParent()->getEntity()->label();
      $lat_lng = $item->getString();
      [$lat, $lng] = explode(',', $lat_lng);

      $elements[$delta] = [
        '#theme' => 'alps_base_lat_lng',
        '#lat' => $lat,
        '#lng' => $lng,
        '#text' => $label,
      ];
    }
    return $elements;
  }

}
