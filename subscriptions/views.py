from .models import Subscription
from .serializers import SubcriptionSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail 
from conf import settings

class SubcriptionList(ListCreateAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubcriptionSerializer

    def post(self, request, format='json'):
        serializer = SubcriptionSerializer(data=request.data)        
        if serializer.is_valid():
            email_plaintext_message = "Thank you for subscribing to us. We'll be in touch soon!"
            send_mail(
                # title:
                "Subscription to subscription-app",
                # message:
                email_plaintext_message,
                # from:
                settings.EMAIL_HOST_USER,
                # to:
                [request.data["email"]]
            )
            serializer.save()
            json = serializer.data
            return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SubcriptionDetail(RetrieveUpdateDestroyAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubcriptionSerializer