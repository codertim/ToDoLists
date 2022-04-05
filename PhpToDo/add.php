
<html>
    <head>
        <title>Add</title>
    </head>
    <body style="background-color: #E45826;">
        <?php
            print("Adding ...");
            $newMessage = $_POST['message'];
            $newPriority = $_POST['priority'];
            print("Adding: " . $newMessage);
            print("<br /><br />");
            
    $mysqli_conn = mysqli_connect("localhost", "root", "", "productivity_mine");
    if (mysqli_connect_errno()) {
      printf("Connect failed: %s\n", mysqli_connect_errno());
      exit();
    } else {
      $clean_msg = mysqli_real_escape_string($mysqli_conn, $newMessage);
      $clean_priority = mysqli_real_escape_string($mysqli_conn, $newPriority);
      $sql = "insert into to_do_items (message, priority, created_at) values ('" . $clean_msg . "', '" . $clean_priority . "', now())";
      $res = mysqli_query($mysqli_conn, $sql);

      $insertId = $mysqli_conn->insert_id;
      echo "<input type='hidden' name='insertId' value='" . $insertId . "' />";

      if ($res === TRUE) {
          echo "A new record has been added";
      } else {
        printf("Could not add record: %s\n", mysqli_error($mysqli_conn));
      }
    }

    // mysqli_free_result($res);
    mysqli_close($mysqli_conn);
        ?>

        <section>
            <a href="list.php">Show All</a>
        </section>
    </body>
</html>
