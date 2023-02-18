<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Node Website</a>
          </div>
          <ul class="nav navbar-nav">
            <li class=""><a href="/">Home</a></li>
            <li><a href="/create">Add New User</a></li>
          </ul>
        </div>
      </nav>


      <div class="container">
        <h2>User's form</h2>
        <form action="#" method="post" id="update_user">
            <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" class="form-control" id="first_name" placeholder="Enter First Name" name="first_name">
              </div>
              
              <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" class="form-control" id="last_name" placeholder="Enter Last Name" name="last_name">
              </div>
            
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
              </div>

              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="number" class="form-control" id="phone" placeholder="Enter Phone Number" name="phone">
              </div>

              <div class="form-group">
                <label for="address">Last Name</label>
                <input type="text" class="form-control" id="address" placeholder="Enter Address" name="address">
              </div>


              <button type="submit" class="btn btn-default">Update</button>
        </form>
      </div>
      
</body>
</html>