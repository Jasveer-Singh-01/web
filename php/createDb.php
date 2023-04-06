<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


class Database{
    public  $conn;
    private $database;
    private $localhost='localhost';
    private $rootName='root';
    private $password='';
    private $dbname='testing';

    function __construct()
    {
    $this->conn=new mysqli($this->localhost,$this->rootName,$this->password,$this->dbname);
    if(!$this->conn)
    {
        echo "Database connection error: " . $this->conn->error;
    }
    // else
    //     echo "Database connection success: " ;
    }
    public function createDb($dbname)
    {   $sql="CREATE DATABASE IF NOT EXISTS $dbname";
        
        if(!$this->conn->query($sql))
        {  
            echo "Error".$this->conn->error;

        }
        else
         echo "<br>"."db created successfully";
         
    }

    public function test_data($data)
    {
      //data=stripslashes($data);
        $data=htmlspecialchars($data);
        return $data;
    }

    public function createTable($tableName)
    {   $sql="use testing ;";
        
        $sql.="create table if not exists $tableName (id INTEGER(10) PRIMARY KEY auto_increment not null, name VARCHAR(50),email VARCHAR(255),password VARCHAR(255))";
        //die($sql);
       // die($this->conn->multi_query($sql));
        if($this->conn->multi_query($sql)===TRUE)
        { 
            echo "<br>"."TABLE CREATED"."<br>";

        }

        else
            echo "ERROR".$this->conn->error;

         //$this->conn->close();
    }

    public function insertData($name,$email,$password)
    {   $sql="use testing ;";
        
        $sql.="INSERT INTO user_data (name, email, password) values ('$name','$email',$password)";
        //die($sql);
        if($this->conn->multi_query($sql)===TRUE)
        {
            echo "<br>"."record inserted successfully";
        }
        else
            echo "<br>"."unable to insert record".$this->conn->error;

    }

    public function set_admin($name,$email,$password)
    { 
        $sql="INSERT INTO admin_data (name, email, password) values ('$name','$email','$password')";
       // die($sql);
        if($this->conn->query($sql)===TRUE)
        {
            echo "<br>"."record inserted successfully";
        }
        else
            echo "<br>"."unable to insert record".$this->conn->error;

    }

    
    

   
}

//$obj=new Database();
//$obj->createDb('testing');
//$obj->createTable('user_data');
//$obj->insertData('deep','deep@gmail.com',134512452);


