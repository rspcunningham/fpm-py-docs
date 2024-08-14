# optimizers

No docstring provided.

### Function: quasi_second_order

```python
def quasi_second_orderobject: torch.Tensor, pupil: torch.Tensor, wave_fourier: torch.Tensor, wave_fourier_new: torch.Tensor, x: int, y: int, alpha_o: float=1, mu_o: float=1, alpha_p: float=1, mu_p: float=1
```

Simple gradient descent optimizer with learning rate and regularization hyperparams for object and pupil.

Args:
    object (torch.Tensor): The object.
    pupil (torch.Tensor): The pupil.
    wave_fourier (torch.Tensor): The Fourier domain of the wave.
    wave_fourier_new (torch.Tensor): The new Fourier domain of the wave.
    x (int): Bottom row where pupil overlaps with object.
    y (int): Leftmost column where pupil overlaps with object.
    alpha_o (float): The learning rate for the object.
    mu_o (float): The regularization parameter for the object.
    alpha_p (float): The learning rate for the pupil.
    mu_p (float): The regularization parameter for the pupil.

Returns:
    tuple: The updated object and pupil.

### Function: tomas

```python
def tomasobject: torch.Tensor, pupil: torch.Tensor, wave_fourier: torch.Tensor, wave_fourier_new: torch.Tensor, x: int, y: int, alpha: float=1, beta: float=1000
```

Tomas' optimizer with learning rate and regularization hyperparams for object and pupil.

Args:
    object (torch.Tensor): The object.
    pupil (torch.Tensor): The pupil.
    wave_fourier (torch.Tensor): The Fourier domain of the wave.
    wave_fourier_new (torch.Tensor): The new Fourier domain of the wave.
    x (int): Bottom row where pupil overlaps with object.
    y (int): Leftmost column where pupil overlaps with object.

Returns:
    tuple: The updated object and pupil.

