<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $message = $data['text'];

    // اینجا می‌توانید کد ارسال ایمیل یا ذخیره‌سازی داده را اضافه کنید

    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
?>