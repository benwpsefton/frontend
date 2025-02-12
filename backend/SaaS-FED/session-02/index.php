<?php
    $title = "Demo page";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title; ?></title> <!-- same as <?php echo $title; ?> -->
</head>

<body>
    <?php
    $name = "Jacques d'Carre";
    $age = 58;
    $job = "Mechanic";
    $days = ["Monday", 23.5, "13.30"];

    $age++; // $age = $age + 1; $age +=1;

    echo "<h1>Hello World</h1>";
    echo "<p>This is $name.</p>"; // string interpolation
    echo '<p>This is $name.</p>'; // literal string

    echo "<p>";
    for ($count = 0; $count < 10; $count++) {
        echo "{$count} ";
    }
    echo "</p>";

    echo "<p>";
    foreach ($days as $item) {
        echo "{item} ";
    }
    echo "</p>";

    $people = [
        [
            "name" => "Adrian",
            "age" => 58,
            "job" => " Lecturer",
        ],
        [
            "name" => "Jane",
            "age" => 34,
            "job" => " Lecturer",
        ],
    ];

    foreach ($people as $person) {
        echo "<h3>{$person['name']}</h3>";
        echo "<p>Age: {$person['age']}</p>";
        echo "<p>Job title:{$person['job']}</p>";
    }

    foreach ($people as $person) {
        foreach ($person as $attribute => $value){
            if ($attribute == "name"){
                echo "<h3>{$value}</h3>";
            } else{
                echo "<p>{$attribute}: {$value}</p>";
            }
        }
    }
    ?>
</body>

</html>