from django.http import JsonResponse
from .models import Resume
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def upload_resume(request):

    if request.method == 'POST':

        name = request.POST.get('name')

        resume = request.FILES.get('resume')

        Resume.objects.create(
            name=name,
            resume=resume
        )

        return JsonResponse({
            'message': 'Resume uploaded successfully'
        })

    return JsonResponse({
        'error': 'Invalid request'
    })