# Get Started

Welcome to **fpm-py**! For a full walkthrough, please refer to the [User Guide](./guide/0_what_is.md) and [API Reference](./reference/0_intro.md). The steps below summarize the key features.

### 1. Installation

Install the library using pip:

```bash
pip install fpm-py
```

### 2. Basic Usage

Start by importing the necessary components:

```python
import fpm_py as fpm
from fpm_py import ImageCapture, ImageSeries
```

### 3. Creating an Image Series

Load your low-resolution images and their corresponding k-space vectors:

```python
captures = [
    ImageCapture(image=img1, k_vector=k1),
    ImageCapture(image=img2, k_vector=k2),
    # Add more captures as needed
]

series = ImageSeries(captures=captures, magnification=4.0, pixel_size=6.5)
```

### 4. Reconstructing High-Resolution Images

Use the `reconstruct()` function to generate a high-resolution image:

```python
output = fpm.reconstruct(series)
```

### 5. Customization Options

- **Iteration Terminators**: Control when the reconstruction stops.
- **Optimizers**: Customize how the image and pupil are updated.

For example, to set a custom iteration terminator:

```python
output = fpm.reconstruct(series, iteration_terminator=lambda inputs: iter_ceil(inputs, max_iter=20))
```

### 6. Parallelism

The algorithm automatically detects if a GPU is available and utilizes it for faster computations.

### 7. Explore Further

This QuickStart covers the basics. For more detailed instructions and advanced features, refer to the full user guide.
