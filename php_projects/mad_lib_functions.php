<?php
  function generateStory(
    $singular_noun,
    $verb,
    $color,
    $distance_unit
  ) {
    $story = "\nThe ${singular_noun}s are lovely, $color, and deep.
But I have promises to keep,
And ${distance_unit}s to go before I $verb,
And ${distance_unit}s to go before I $verb.\n";
    return $story;
  }

  echo generateStory("bum", "run", "red", "centimetre");
  echo generateStory("tractor", "squeeze", "brown", "yard");
  echo generateStory("mug", "attack", "yellow", "parsec");
