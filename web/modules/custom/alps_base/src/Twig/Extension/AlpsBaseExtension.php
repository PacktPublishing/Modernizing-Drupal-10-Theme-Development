<?php

declare(strict_types=1);

namespace Drupal\alps_base\Twig\Extension;

use Drupal\Core\Entity\ContentEntityInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * A Twig extension for the Alps Base module.
 */
class AlpsBaseExtension extends AbstractExtension {

  /**
   * {@inheritdoc}
   */
  public function getFunctions(): array {
    return [
      new TwigFunction(
        'get_link_uri', [$this, 'getLinkUri']),
      new TwigFunction(
        'get_link_title', [$this, 'getLinkTitle']),
      new TwigFunction(
        'get_text', [$this, 'getText']),
      new TwigFunction(
        'get_image', [$this, 'getImage']),
      new TwigFunction(
        'theme_setting', [$this, 'getThemeSetting']),
    ];
  }

  /**
   * Returns the URL of a link field.
   *
   * @param \Drupal\Core\Entity\ContentEntityInterface $entity
   *   The entity.
   * @param string $field_name
   *   The field name.
   *
   * @return string
   *   The URL of a link field.
   *
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function getLinkUri(ContentEntityInterface $entity, string $field_name): string {
    return $entity->get($field_name)->first()->getUrl()->toString();
  }

  /**
   * Returns the title of a link field.
   *
   * @param \Drupal\Core\Entity\ContentEntityInterface $entity
   *   The entity.
   * @param string $field_name
   *   The field name.
   *
   * @return string
   *   The title of a link field.
   *
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function getLinkTitle(ContentEntityInterface $entity, string $field_name): string {
    return $entity->get($field_name)->first()->get('title')->getValue();
  }

  /**
   * Returns the text of a text field.
   *
   * @param \Drupal\Core\Entity\ContentEntityInterface $entity
   *   The entity.
   * @param string $field_name
   *   The field name.
   *
   * @return string
   *   The text of a text field.
   *
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function getText(ContentEntityInterface $entity, string $field_name): string {
    return $entity->get($field_name)->first()->get('value')->getValue();
  }

  /**
   * Returns the image of a media field.
   *
   * @param \Drupal\Core\Entity\ContentEntityInterface $entity
   *   The entity.
   * @param string $field_name
   *   The field name.
   *
   * @return string
   *   The image of a media field.
   *
   * @throws \Drupal\Core\TypedData\Exception\MissingDataException
   */
  public function getImage(ContentEntityInterface $entity, string $field_name): string {
    return $entity->get($field_name)->entity->get('field_media_image')->entity->getFileUri();
  }

  /**
   * @param string $theme_setting
   *
   * @return string|null
   */
  public function getThemeSetting(string $theme_setting): ?string {
    $conf = theme_get_setting($theme_setting);
    if ($conf !== NULL) {
      return $conf;
    }

    $parents = \Drupal::theme()
      ->getActiveTheme()
      ->getBaseThemeExtensions();
    foreach ($parents as $parent) {
      $conf = theme_get_setting($theme_setting, $parent->getName());

      if ($conf !== NULL) {
        return $conf;
      }
    }

    return NULL;
  }

}

