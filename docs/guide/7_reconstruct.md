# Using the Reconstruct Function

The `reconstruct()` function is the core algorithm of the **fpm-py** library, designed to reconstruct a high-resolution image from a series of low-resolution images captured at different illumination angles. This function utilizes the Fourier Ptychography algorithm to synthesize a detailed spatial domain image from its Fourier domain representations.

### Function Signature

```python
def reconstruct(
    image_series: ImageSeries,
    output_scale_factor: int = None,
    pupil_0: torch.Tensor = None,
    iteration_terminator: TerminatorType = iter_ceil,
    optimizer: OptimizerType = tomas
) -> torch.Tensor:
```

Parameters:

- **`image_series`** (`ImageSeries`): The series of images to be used for reconstruction. This object should be an instance of the `ImageSeries` class, containing multiple `ImageCapture` objects along with necessary metadata.

- **`output_scale_factor`** (`int`, optional): The scale factor for the output image size. If not provided, the function calculates the minimum size required for the output image based on the input images.

- **`pupil_0`** (`torch.Tensor`, optional): The initial pupil function used in the reconstruction. If not provided, a default circular pupil function will be created.

- **`iteration_terminator`** (`TerminatorType`, optional): The function used to determine when to stop the iteration process. The default is `iter_ceil`, which stops after a predefined number of iterations.

- **`optimizer`** (`OptimizerType`, optional): The optimization function used to update the object and pupil estimates during the reconstruction. The default is the `tomas` optimizer.

Returns:

- **`torch.Tensor`**: The reconstructed high-resolution image in the spatial domain, represented as a complex tensor.

### How It Works

1. **Initialize the Pupil Function**: If `pupil_0` is not provided, a default circular pupil function is created to match the size of the images in the series.

2. **Determine Output Image Size**: The output image size is either calculated based on the input images or scaled by the provided `output_scale_factor`.

3. **Initialize Reconstruction**: The function initializes the object and pupil with default values and begins the main reconstruction loop.

4. **Reconstruction Loop**: For each image in the `ImageSeries`:
   - Convert the image to the Fourier domain and update the object and pupil estimates.
   - Apply the optimization function to refine the object and pupil.
   - Update the object based on the measured and estimated images.

5. **Return Final Image**: After completing the iterations, the function returns the final reconstructed image in the spatial domain. 

:::tip
You may want to do a few conversions after getting the results:
   - Get the magnitude of the reconstruted image. By default, a complex-valued image is returned with both magnitude and phase.
   - Cast the result back to the CPU. Unless you are doing downstream processing on your GPU, you need to explicitly offload the tensor to use it in CPU calculations.
   - Convert to a `numpy` array, since other libraries may not natively support working with tensors.
:::

### Example Usage

Here's a basic example of how to use the `reconstruct()` function with an `ImageSeries` object:

```python
import fpm_py as fpm
import torch
import matplotlib.pyplot as plt

# Load an example ImageSeries
dataset = fpm.ImageSeries.from_dict("path/to/your/dataset.pt")

# Reconstruct the high-resolution image
output = fpm.reconstruct(dataset)

# Plot the output
plt.imshow(output.abs().cpu().numpy(), cmap="gray")
plt.show()
```

In this example:
- Replace `"path/to/your/dataset.pt"` with the actual path to your dataset.
- The `reconstruct()` function is used to obtain a high-resolution image from the `dataset`.
- `output.abs().cpu().numpy()` is called to cast the result into a numpy array of the image's magnitude on the CPU.
- The resulting image is displayed using Matplotlib.

By using the `reconstruct()` function, you can leverage the Fourier Ptychography algorithm to create high-resolution images from a series of lower-resolution captures.
