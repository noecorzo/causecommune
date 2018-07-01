<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 12-03-18
 * Time: 11:50
 */

namespace Drupal\first_module\Controller;

use Drupal\Core\Controller\ControllerBase;

class IntroController extends ControllerBase
{
    public function clemence()
    {
        return [
            '#markup' => $this->t('Question pour un champion'),
            '#title' => 'Wololo'
        ];
    }
}