# Parallelism

The **fpm-py** library supports running the Fourier Ptychography reconstruction algorithm on both CPU and GPU. The parallelism is managed through the `ImageSeries` class, which automatically detects the available hardware and utilizes it to accelerate the reconstruction process.

### GPU Acceleration

When you create an `ImageSeries` object, the library automatically checks for available GPU resources. If a compatible GPU is found, it will use CUDA for NVIDIA GPUs or Metal for Apple GPUs to perform the computation. This allows for significant performance improvements, especially with large datasets or high-resolution reconstructions.

### Automatic Hardware Detection

The `ImageSeries` class handles the detection and selection of the appropriate hardware:

1. **GPU Detection**: During the initialization of the `ImageSeries` object, the library checks for the presence of a compatible GPU.
2. **Device Assignment**: Based on the detected hardware, the library assigns the computation to either CUDA, Metal, or falls back to the CPU if no compatible GPU is available.
