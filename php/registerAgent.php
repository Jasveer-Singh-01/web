<?php
require_once './createDb.php';

$obj=new Database();


if(isset($_POST['register']))
{
    
    $admin_Name=$obj->test_data($_POST['userName']);
    $admin_email=$obj->test_data($_POST['email']);
    $admin_Password=$obj->test_data($_POST['password']);

    $obj->set_admin($admin_Name,$admin_email,$admin_Password);
}

if(issset($_POST['adminTable']))
{
    $obj->createTable('admin_data');
}



?>