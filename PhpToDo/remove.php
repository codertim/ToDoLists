
<html>
    <head>
        <title>Remove Item from List</title>
    </head>
    <body style="background-color: #E45826;">
        <h2>Delete</h2>

        <?php
            $mysqli = mysqli_connect("localhost", "root", "", "productivity_mine");
            if (mysqli_connect_errno()) {
              printf("Connect failed: %s\n", mysqli_connect_errno());
              exit();
            } else {
              $id = $_GET['id'];
              $sql = "delete from to_do_items where id = ?";
              $stmt = $mysqli->prepare($sql);
              $stmt->bind_param("i", $id);
              $stmt->execute();
              $result = $stmt->get_result();
              print_r($result);

              echo "<p>Item Deleted</p>";
            }
        ?>

        <div>
            <a href="list.php">List</a>
        </div>
    </body>
</html>
