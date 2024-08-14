# utils

Utility functions for the FPM reconstruction process.

### Function: ft

```python
fpm_py.utils.ft(x: torch.Tensor):
    ...
```

Simple macro for 2D Fourier transform.
#### Args:
- `x` (`torch.Tensor`): The input image.
#### Returns:
torch.Tensor: The Fourier transform of the input image.


### Function: ift

```python
fpm_py.utils.ift(x: torch.Tensor):
    ...
```

Simple macro for 2D Inverse Fourier transform.
#### Args:
- `x` (`torch.Tensor`): The input Fourier domain image.
#### Returns:
torch.Tensor: The inverse Fourier transform of the input image.


### Function: kvector_to_x_y

```python
fpm_py.utils.kvector_to_x_y(
    fourier_center: tuple[int, int],
    image_size: tuple[int, int],
    du: float,
    k_vector: torch.Tensor
):
    ...
```

Converts k-vector to x and y coordinates in the spatial domain.

#### Args:
- `fourier_center` (`tuple[int, int]`): The center of the Fourier domain image.
- `image_size` (`tuple[int, int]`): The size of the image.
- `du` (`float`): The pixel size in the Fourier domain.
- `k_vector` (`torch.Tensor`): The k-vector associated with the image.

#### Returns:
tuple[int, int]: The x and y coordinates in the spatial domain.


### Function: overlap_matrices

```python
fpm_py.utils.overlap_matrices(
    larger: torch.Tensor,
    smaller: torch.Tensor,
    bottom: int,
    left: int
):
    ...
```

Adds a smaller matrix to a larger matrix at the specified position.
#### Args:
- `larger` (`torch.Tensor`): The larger matrix.
- `smaller` (`torch.Tensor`): The smaller matrix.
- `bottom` (`int`): The bottom row index to place the smaller matrix.
- `left` (`int`): The left column index to place the smaller matrix.
#### Returns:
torch.Tensor: The updated larger matrix.


### Function: circle_like

```python
fpm_py.utils.circle_like(array: torch.Tensor):
    ...
```

Creates a complex-valued circular mask with the same shape as the input array.
#### Args:
- `array` (`torch.Tensor`): The input array.
#### Returns:
torch.Tensor: The circular mask.


