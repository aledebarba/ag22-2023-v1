<?php 

add_action( 'rest_api_init', function () {
    register_rest_route( 'datamodel/v1', '/send-email', array(
      'methods' => 'POST',
      'callback' => 'datamodel_send_email_callback',
    ) );
  } );

  function datamodel_send_email_callback( $request ) {
    $params = $request->get_params();
  
    // Validate input
    if ( empty( $params['to'] ) || empty( $params['subject'] ) || empty( $params['message'] ) ) {
      return new WP_Error( 'missing_params', 'Missing required parameters.', array( 'status' => 400 ) );
    }
  
    // Send email
    $to = sanitize_email( $params['to'] );
    $subject = sanitize_text_field( $params['subject'] );
    $message = wp_kses_post( $params['message'] );
  
    $headers[] = 'Content-Type: text/html; charset=UTF-8';
    $headers[] = 'From: My Website <noreply@example.com>';
  
    if ( wp_mail( $to, $subject, $message, $headers ) ) {
      return array( 'success' => true );
    } else {
      return new WP_Error( 'send_failed', 'Failed to send email.', array( 'status' => 500 ) );
    }
  }
  
?>