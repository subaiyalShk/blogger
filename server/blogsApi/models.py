from django.db import models

class Collection(models.Model):
    name=models.CharField(max_length=45)
    description=models.CharField(max_length=45)
    #featured
    #blogs
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name

class Blog(models.Model):
    title= models.CharField(max_length=255)
    description= models.TextField()
    display= models.ImageField(null=True, blank=True)
    featured_at= models.ForeignKey(Collection, related_name="featured", on_delete=models.CASCADE, null=True)
    collection= models.ForeignKey(Collection, related_name="blogs", on_delete=models.CASCADE, null=True)
    #gallery
    #comments
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.title

class Comment(models.Model):
    author= models.CharField(max_length=255)
    text= models.TextField()
    blog= models.ForeignKey(Blog, related_name="comments", on_delete=models.CASCADE, null=True)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.title
    

class BlogImage(models.Model):
    blog = models.ForeignKey(Blog, related_name="gallery", default=None, on_delete=models.CASCADE)
    image =  models.ImageField(null=True, blank=True)
    def __str__(self):
        return self.blog.title