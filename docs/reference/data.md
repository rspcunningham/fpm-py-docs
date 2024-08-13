# data

No docstring provided.

### Function: get_device

```python
def get_device
```

No docstring provided.

## Class: ImageCapture

```python
class ImageCapture
```

No docstring provided.

## Class: ImageSeries

```python
class ImageSeries
```

A series of images captured with the same optical magnification and pixel size.

Args:
    image_stack (list[ImageCapture]): A list of ImageCapture objects
    optical_magnification (float): The optical magnification of the images
    pixel_size (float): The physical size of a pixel in the image, in micrometers
    effective_magnification (float): The effective magnification of the images. If not provided, it will be calculated as optical_magnification / pixel_size

### Function: __post_init__

```python
def __post_init__self
```

No docstring provided.

### Function: __post_init__

```python
def __post_init__self
```

No docstring provided.

### Function: save

```python
def saveself, path: str
```

No docstring provided.

### Function: load

```python
def loadpath: str
```

No docstring provided.

### Function: from_dict

```python
def from_dictpath: str
```

No docstring provided.

### Function: to_dict

```python
def to_dictself
```

No docstring provided.

