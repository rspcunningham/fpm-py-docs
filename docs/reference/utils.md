# utils

### Function: ft

```python
def ft(x: torch.Tensor):
    ...
```



### Function: ift

```python
def ift(x: torch.Tensor):
    ...
```



### Function: kvector_to_x_y

```python
def kvector_to_x_y(
    fourier_center: tuple[int, int],
    image_size: tuple[int, int],
    du: float,
    k_vector: torch.Tensor
):
    ...
```

Converts k-vector to x and y coordinates in the spatial domain.
Args:
fourier_center (Tensor): The center of the Fourier domain.
image_size (Tensor): The size of the image.
du (Tensor): The effective magnification.
k_vector (Tensor): The k-vector.
Returns:
tuple: The x and y coordinates in the spatial domain.

### Function: overlap_matrices

```python
def overlap_matrices(
    larger: torch.Tensor,
    smaller: torch.Tensor,
    bottom: int,
    left: int
):
    ...
```

Adds a smaller matrix to a larger matrix at the specified position.
Args:
larger (Tensor): The larger matrix.
smaller (Tensor): The smaller matrix.
bottom (int): The bottom row index to place the smaller matrix.
left (int): The left column index to place the smaller matrix.
Returns:
Tensor: The updated larger matrix.

### Function: circle_like

```python
def circle_like(array: torch.Tensor):
    ...
```

Creates a circular mask with the same shape as the input array.
Args:
array (Tensor): The input array.
Returns:
Tensor: The circular mask.

