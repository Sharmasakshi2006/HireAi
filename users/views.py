from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
import json


@csrf_exempt
def signup(request):

    if request.method == 'POST':

        data = json.loads(request.body)

        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if User.objects.filter(email=email).exists():

            return JsonResponse({
                'error': 'Email already exists'
            }, status=400)

        User.objects.create(
            name=name,
            email=email,
            password=password
        )

        return JsonResponse({
            'message': 'User created successfully'
        })

    return JsonResponse({
        'error': 'Invalid request'
    })


@csrf_exempt
def login(request):

    if request.method == 'POST':

        data = json.loads(request.body)

        email = data.get('email')
        password = data.get('password')

        try:

            user = User.objects.get(
                email=email,
                password=password
            )

            return JsonResponse({
                'message': 'Login successful',
                'name': user.name
            })

        except User.DoesNotExist:

            return JsonResponse({
                'error': 'Invalid email or password'
            }, status=400)

    return JsonResponse({
        'error': 'Invalid request'
    })