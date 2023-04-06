<?php
require_once './createDb.php';

$co=new Database();
$uname=$_POST['uname'];
$pass=$_POST['pass'];



class Agent{

    public $conn;
    public function __construct($conn)
    {
        $this->conn=$conn;
    }
    public function agentLogin($uname,$pass)
    { 
        $sql="SELECT * FROM admin_data WHERE name = '$uname' AND password = '$pass' ";
     
        $result=$this->conn->query($sql);
        
        if ($result->num_rows > 0)
        {
            // while ($row = $result->fetch_assoc())
            // {   
            //     $data["success"]=true;
            //     echo json_encode($data);
            //     header ("Location: ../form.html ");
            // }
            echo 1;
        }
        else
            echo 0;
        // else{
        //     $data["success"]=false;
        //     echo json_encode($data);
        // }
           
    }

}
$ag=new Agent($co->conn);


if($uname != "" && $pass != "")
{
    $ag->agentLogin($uname,$pass);
}
else
    header ("Location: ../form.html ");






