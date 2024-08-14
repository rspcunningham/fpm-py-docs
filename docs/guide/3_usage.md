# Basic Usage

Once you have the library installed, you can begin using it for high-resolution image reconstruction. To get up and running right away, the typical workflow involves:

- Loading a dataset of low-resolution images into an `ImageSeries` object with the images and their corresponding metadata.
- Using the `reconstruct()` function to produce the high-resolution image.
- Visualizing or saving the output.

Here’s an example that demonstrates the basic usage of fpm-py:

```python
import fpm_py as fpm
import matplotlib.pyplot as plt

# Load example dataset
dataset = fpm.ImageSeries.from_dict("datasets/example.pt")

# Reconstruct the object
output = fpm.reconstruct(dataset)

# Plot the output
plt.imshow(output.abs().cpu().numpy(), cmap="gray")
plt.show()
```

In this example, we first import the necessary libraries and load an example dataset into an `ImageSeries` object. We then reconstruct the high-resolution image using the `reconstruct()` function and finally visualize the result using Matplotlib.
