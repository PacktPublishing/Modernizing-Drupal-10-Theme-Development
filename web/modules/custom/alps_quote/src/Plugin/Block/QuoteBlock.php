<?php

declare(strict_types = 1);

namespace Drupal\alps_quote\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a block with random travel quotes.
 *
 * @Block(
 *   id = "alps_quote_block",
 *   admin_label = @Translation("Quote"),
 *   category = @Translation("Custom")
 * )
 */
class QuoteBlock extends BlockBase {

  private array $quotes = [
    ['Life is either a daring adventure, or nothing at all', 'Helen Keller'],
    ['Travel is fatal to prejudice, bigotry, and narrow-mindedness', 'Mark Twain'],
    ['A good traveler has no fixed plans, and is not intent on arriving', 'Lao Tzu'],
    ['The world is a book, and those who do not travel read only one page', 'Saint Augustine'],
    ['I haven’t been everywhere, but it’s on my list', 'Susan Sontag'],
    ['Once a year, go somewhere you have never been before', 'Dalai Lama'],
  ];

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    $quote = $this->quotes[array_rand($this->quotes)];

    $build['content'] = [
      '#theme' => 'alps_quote_block',
      '#quote' => $quote[0],
      '#author' => $quote[1],
    ];

    return $build;
  }

}
