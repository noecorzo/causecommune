<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 12-03-18
 * Time: 16:12
 */

namespace Drupal\first_module\Plugin\Block;

use Drupal\Core\Block\Annotation\Block;
use Drupal\Core\Block\BlockBase;

/**
 * Class PoweredByBlock
 * @package Drupal\first_module\Plugin\Block
 *
 * @Block(
 *      id="first_module_powered",
 *     admin_label="Powered Block",
 *     category="NCorzo"
 * )
 */

class PoweredByBlock extends BlockBase
{
    public function build()
    {
        return [
            '#markup' => 'Powered by Noelia Corzo'
        ];
    }
}