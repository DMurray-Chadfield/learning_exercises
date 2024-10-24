<?php
class StringUtilities {
  public static function secondCase(&$string) {
    if (strlen($string) > 1) {
      $string = strtolower($string);
      $string[1] = strtoupper($string[1]);

      return $string;
    } else {
      return strtolower($string);
    }
  }
}

class Pajamas {
  private $owner, $fit, $color;

  function __construct(
    $owner = "elephant",
    $fit = "loose", 
    $color = "red") {
    $this->owner = StringUtilities::secondCase($owner);
    $this->fit = $fit;
    $this->color = $color;
  }

  public function describe() {
    return "These pajamas are {$this->color}, have a {$this->fit} fit, and belong to {$this->owner}.\n";
  }

  public function setFit($new_fit) {
    $this->fit = $new_fit;
  }
}

class ButtonablePajamas extends Pajamas {
  private $button_state = "unbuttoned";

  public function describe() {
    return parent::describe() . "They also have buttons which are currently {$this->button_state}.";
  }

  public function toggleButtons() {
    switch ($this->button_state) {
      case "buttoned":
        $this->button_state = "unbuttoned";
        break;
      case "unbuttoned":
        $this->button_state = "buttoned";
        break;
      default:
        echo "Buttons not in valid state. Setting to buttoned...";
        $this->button_state = "buttoned";
        break;
    }
  }
}

$chicken_PJs = new Pajamas("CHICKEN");
$chicken_PJs->setFit("tight");
echo $chicken_PJs->describe();

$moose_PJs = new ButtonablePajamas("moose");
$moose_PJs->toggleButtons();
echo $moose_PJs->describe();
