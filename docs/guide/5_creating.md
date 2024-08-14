# Creating an ImageSeries

If you want to use images you have captured with a microscope, rather than one of our public datasets, this guide will walk you through the process of creating an `ImageSeries` object using **fpm-py**. The `ImageSeries` is a collection of low-resolution images captured at different illumination angles, along with their corresponding k-space vectors. This data structure is crucial for performing high-resolution image reconstruction using the Fourier Ptychography algorithm.

### Prerequisites

Before you begin, ensure you have the following:

- A list of low-resolution images captured at different illumination angles.
- A corresponding list of k-space vectors, one for each image.
- The optical magnification used during image capture.
- The physical pixel size of your imaging sensor.

:::info
Right now, you need to handle calculating the k-vectors yourself. Future releases of fpm-py will expose a function to make that process easier
:::

### Import Necessary Libraries

Start by importing the required libraries:

```python
import torch
import fpm_py as fpm
```

### Prepare Your Data

Ensure your low-resolution images and k-space vectors are organized in a list. Each image should be a 2D `torch.Tensor`, and each k-space vector should be a 1x2 `torch.Tensor`.

```python
# Example list of low-resolution images
images = [
    torch.rand((256, 256)),  # Replace with actual image
    torch.rand((256, 256)),
    torch.rand((256, 256))
]

# Example list of k-space vectors
k_vectors = [
    torch.tensor([0.1, 0.1]),  # Replace with actual k-vectors
    torch.tensor([0.1, 0.2]),
    torch.tensor([0.2, 0.1])
]
```

:::tip
If you are using PIL or numpy to handle your images in python, you need to convert them into pytorch Tensors first.
https://stackoverflow.com/questions/69738523/how-to-convert-a-tif-pil-image-to-a-torch-tensor
::: 


### Create ImageCapture Objects

For each image and its corresponding k-space vector, create an `ImageCapture` object. This step pairs the image with its k-space vector, making it ready for inclusion in an `ImageSeries`.

```python
image_captures = []
for image, k_vector in zip(images, k_vectors):
    capture = fpm.ImageCapture(image=image, k_vector=k_vector)
    image_captures.append(capture)
```

### Define Optical Magnification and Pixel Size

You need to define the optical magnification and the physical pixel size of your imaging setup. These parameters are necessary for accurate reconstruction.

```python
optical_magnification = 20.0  # Example magnification
pixel_size = 1.12  # Example pixel size in micrometers
```

### Create an ImageSeries Object

Now, create the `ImageSeries` object by passing the list of `ImageCapture` objects, along with the optical magnification and pixel size, to the `ImageSeries` constructor.

```python
image_series = fpm.ImageSeries(
    image_stack=image_captures,
    optical_magnification=optical_magnification,
    pixel_size=pixel_size
)
```

### Save the ImageSeries (Optional)

If you wish to save the `ImageSeries` object to disk for later use, you can use the `save()` method.

```python
image_series.save("path/to/save/image_series.pt")
```

### Load an ImageSeries from Disk (Optional)

If you have previously saved an `ImageSeries`, you can load it back into your workspace using the `load()` method.

```python
loaded_image_series = fpm.ImageSeries.load("path/to/save/image_series.pt")
```

### Summary

You have successfully created an `ImageSeries` object in **fpm-py** using your low-resolution images and their k-space vectors. This `ImageSeries` can now be used as input to the `reconstruct()` function for high-resolution image reconstruction. By organizing your data into `ImageCapture` objects and grouping them into an `ImageSeries`, you can easily manage and process your datasets with Fourier Ptychography.

For more information on how to use the `reconstruct()` function, refer to the next section of the user guide.

