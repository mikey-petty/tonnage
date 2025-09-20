from django.test import TestCase
from django.urls import reverse

class TestHelloApi(TestCase):
    def test_hello_endpoint_returns_message(self):
        # Call the endpoint
        url = reverse("hello_world")  # assuming you named the URL pattern "hello"
        response = self.client.get(url)

        # Assertions
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "Hello from Django!"})
