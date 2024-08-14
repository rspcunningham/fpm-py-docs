# data

This module contains the ImageCapture and ImageSeries classes, which are the base datatypes used to store and manipulate images and image series in the FPM framework. The ImageCapture class represents a single image capture, while the ImageSeries class represents a series of images captured with the same optical magnification and pixel size. The ImageSeries class also contains methods for saving and loading image series data to and from disk.

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


#### Method: __post_init__

```python
fpm_py.data.ImageCapture.__post_init__()
```



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


#### Method: __post_init__

```python
fpm_py.data.ImageSeries.__post_init__()
```



#### Method: save

```python
fpm_py.data.ImageSeries.save(
    self,
    path: str
)
```

Save the ImageSeries object to disk.

#### Args:
- `path` (`str`): The path to save the object to


#### Method: load

```python
fpm_py.data.ImageSeries.load()
```

Load an ImageSeries object from disk.

#### Args:
- `path` (`str`): The path to load the object from


#### Method: from_dict

```python
fpm_py.data.ImageSeries.from_dict()
```

Load an ImageSeries object saved as a dictionary.

#### Args:
- `path` (`str`): The path to load the object from

#### Returns:
- `None`: The loaded ImageSeries object


#### Method: to_dict

```python
fpm_py.data.ImageSeries.to_dict()
```

Convert the ImageSeries object to a dictionary.

