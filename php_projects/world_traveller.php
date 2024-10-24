<?php
  $riel = 2103942;
  $kyat = 19092;
  $krones = 109;
  $lek = 9094;

  echo "Riel: $riel
Kyat: $kyat
Krones: $krones
Lek: $lek";

  $riel_exchange = 0.00025;
  $kyat_exchange = 0.00061;
  $krones_exchange = 0.11;
  $lek_exchange = 0.0096;

  $riel_to_dollars = $riel * $riel_exchange;
  echo "\n\$$riel_to_dollars worth of riel";

  $kyat_to_dollars = $kyat * $kyat_exchange;
  echo "\n\$$kyat_to_dollars worth of kyat";

  $krones_to_dollars = $krones * $krones_exchange;
  echo "\n\$$krones_to_dollars worth of krones";

  $lek_to_dollars = $lek * $lek_exchange;
  echo "\n\$$lek_to_dollars worth of lek";

  $total = $riel_to_dollars + $kyat_to_dollars + $krones_to_dollars + $lek_to_dollars - 4;
  echo "\nTotal minus \$4 fee is \$$total";
