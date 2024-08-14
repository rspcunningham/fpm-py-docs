# fpm_py.*data*

### Function: get_device

```python
fpm_py.data.get_device():
    ...
```



## Class: ImageCapture

```python
fpm_py.data.ImageCapture:
    ...
```

A single image capture with associated k-vector.

#### Args:
- `image` (`torch.Tensor`): The image data
- `k_vector` (`torch.Tensor`): The k-vector associated with the image

#### Raises:
- `ValueError`: If the image is not 2D or the k_vector is not 1x2


## Class: ImageSeries

```python
fpm_py.data.ImageSeries:
    ...
```

A series of images captured with the same optical magnification and pixel size.

#### Args:
- `image_stack` (`list[ImageCapture]`): A list of ImageCapture objects
- `optical_magnification` (`float`): The optical magnification of the images
- `pixel_size` (`float`): The physical size of a pixel in the image, in micrometers
- `effective_magnification` (`float`): The effective magnification of the images. If not provided, it will be calculated as optical_magnification / pixel_size

#### Raises:
- `ValueError`: If the images in the stack do not have the same shape
- `ValueError`: If effective_magnification is not provided and both optical_magnification and pixel_size are not provided


