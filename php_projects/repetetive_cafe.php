<?php
  $drinks = [
    "Tea" => 1.5,
    "Coffee" => 2.0,
    "Orange Juice" => 3.0
  ];

  $pastries = [
    "Croissant",
    "Pain au Chocolat",
    "Pastie"
  ]
?>
<h1>Welcome to the Repetitive Cafe</h1>

<h3>Drinks!</h3>
<ul>
  <?php foreach ($drinks as $key => $value): ?>
  <li><?="{$key}: £{$value}";?></li>
  <?php endforeach; ?>
</ul>
<h3>Pastries! ($2 each)</h3>
<ul>
  <?php for ($i = 0; $i < count($pastries); $i ++): ?>
  <li><?=$pastries[$i]?></li>
  <?php endfor; ?>
</ul>
