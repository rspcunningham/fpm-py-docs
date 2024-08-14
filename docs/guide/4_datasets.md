# Datasets

Currently, to use **fpm-py**, you will need to work with your own data. We are actively developing public datasets that will be accessible directly within the library, similar to how Hugging Face's `transformers` library works.

This feature will allow you to experiment with the Fourier Ptychography algorithm without needing any hardware. These datasets and the easy-to-use download functionality will be available in a future release. Stay tuned!

### Sample Dataset

If you want to get started with **fpm-py**, you can use a sample `ImageSeries` dataset available on our GitHub repository.

You can find the sample `ImageSeries` dataset at the following link: [Sample Dataset on GitHub](https://github.com/rspcunningham/fpm-py/raw/main/datasets/example.pt).

To load the sample dataset, download it from GitHub and use the `load()` method provided by the `ImageSeries` class:

```python
import fpm_py as fpm

# Load the sample dataset from GitHub
dataset = fpm.ImageSeries.load("path/to/example.pt")

# Reconstruct the high-resolution image
output = fpm.reconstruct(dataset)
```
