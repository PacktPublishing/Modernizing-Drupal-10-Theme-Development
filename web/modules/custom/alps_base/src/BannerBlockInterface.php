<?php

namespace Drupal\alps_base;

/**
 * Interface for BannerBlock entities.
 */
interface BannerBlockInterface {

  /**
   * Return the link.
   *
   * @return string
   *   The link.
   */
  public function getLink(): string;

  /**
   * Return the title.
   *
   * @return string
   *   The title.
   */
  public function getTitle(): string;

  /**
   * Return the image.
   *
   * @return string
   *   The image.
   */
  public function getImage(): string;

  /**
   * Return the CTA.
   *
   * @return string
   *   The CTA.
   */
  public function getCta(): string;

}
