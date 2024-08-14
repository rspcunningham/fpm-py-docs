# algorithm

The algorithm module contains the core algorithm for reconstructing an object from a series of images. The main function is reconstruct, which takes an `ImageSeries` object and returns the reconstructed object in the spatial domain (as a complex value).

### Function: reconstruct

```python
fpm_py.algorithm.reconstruct(
    image_series: ImageSeries,
    output_scale_factor: int,
    pupil_0: torch.Tensor,
    iteration_terminator: TerminatorType,
    optimizer: OptimizerType
):
    ...
```

Core algorithm. Reconstructs an object from a series of images.

#### Args:
- `image_series` (`ImageSeries`): The series of images to reconstruct.
- `output_scale_factor` (`int`): The scale factor of the output image. If not provided, the minimum needed size will be calculated.
- `pupil_0` (`torch.Tensor`): The initial calculation of the pupil function. If not provided, a boolean circular pupil will be created.
- `iteration_terminator` (`TerminatorType`): The function that determines when to stop iterating. If not provided, the default is to iterate 10 times.
- `optimizer` (`OptimizerType`): The optimizer function that updates the object and pupil. If not provided, the default is the tomas optimizer.

#### Returns:
    torch.Tensor: The reconstructed object in the spatial domain.



