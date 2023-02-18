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
        <center><h2>User's Lists</h2></center>
        
        <table class="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Default</td>
              <td>Defaultson</td>
              <td>def@somemail.com</td>
              <td>
                <a href="#" class="btn btn-primary">Details</a>
                <a href="#" class="btn btn-success">Edit</a>
                <a href="#" class="btn btn-danger">Delete</a>
              </td>
            </tr>      
          </tbody>
        </table>
    </div>

</body>
</html>