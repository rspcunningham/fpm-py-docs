# utils

Utility functions for the FPM reconstruction process.

### Function: ft

```python
fpm_py.utils.ft(x: torch.Tensor):
    ...
```

Simple macro for 2D Fourier transform.

### Function: ift

```python
fpm_py.utils.ift(x: torch.Tensor):
    ...
```

Simple macro for 2D Inverse Fourier transform.

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
- `fourier_center` (`Tensor`): The center of the Fourier domain.
- `image_size` (`Tensor`): The size of the image.
- `du` (`Tensor`): The effective magnification.
- `k_vector` (`Tensor`): The k-vector.
#### Returns:
- `None`: The x and y coordinates in the spatial domain.


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
- `larger` (`Tensor`): The larger matrix.
- `smaller` (`Tensor`): The smaller matrix.
- `bottom` (`int`): The bottom row index to place the smaller matrix.
- `left` (`int`): The left column index to place the smaller matrix.
#### Returns:
- `None`: The updated larger matrix.


### Function: circle_like

```python
fpm_py.utils.circle_like(array: torch.Tensor):
    ...
```

Creates a circular mask with the same shape as the input array.
#### Args:
- `array` (`Tensor`): The input array.
#### Returns:
- `None`: The circular mask.


