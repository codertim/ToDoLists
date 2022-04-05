
<html>
    <head>
    </head>
    <body style="background-color: #E45826;">

    <?php
    $mysqli = mysqli_connect("localhost", "root", "", "productivity_mine");
    if (mysqli_connect_errno()) {
      printf("Connect failed: %s\n", mysqli_connect_errno());
      exit();
    } else {
      $sql = "select * from to_do_items order by priority asc";
      $res = mysqli_query($mysqli, $sql);

      if ($res) {
        $num_rows = mysqli_num_rows($res);
        printf("<h2>%d records found</h2>\n", $num_rows);

        echo "<table>";
        echo "<tr><th>Item</th><th>Priority</th></tr>";
        while ($currArray = mysqli_fetch_array($res, MYSQLI_ASSOC)) {
          echo "<tr>";
          $message = $currArray['message'];
          $priority = $currArray['priority'];
          $id = $currArray['id'];
          echo '<td>' . $message . '</td>'; 
          echo '<td>' . $priority .  '</td>';
          echo '<td>' . '<a href="remove.php?id=' . $id . '">X</a>' . '</td>';
          echo "</tr>";
        }
        echo "</table>";
      } else {
        printf("Could not find records: %s\n", mysqli_error($mysqli));
      }
    }

    mysqli_free_result($res);
    mysqli_close($mysqli);
?>

        <div style="margin: 30px;">
           <a href="add.html">Add</a>
        </div>
    </body>
</html>
