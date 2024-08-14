# Introduction

Welcome to the **fpm-py** user guide! This library is designed to perform high-resolution image reconstruction using the Fourier Ptychography algorithm. Fourier Ptychography combines multiple low-resolution images taken at different illumination angles into a single high-resolution image. This process unlocks the potential of affordable imaging systems, transforming them into powerful diagnostic tools.

## Key Components

**fpm-py** revolves around two key components: the data structures (`ImageCapture` and `ImageSeries`) and the reconstruction algorithm (`reconstruct()`).

### Data Structures

#### `ImageCapture`

`ImageCapture` is a data structure that represents a single image taken under a specific illumination angle. Each `ImageCapture` object includes:
- The image data itself
- The corresponding k-space vector, which is a function of the illumination angle

#### `ImageSeries`

`ImageSeries` is a collection of `ImageCapture` objects, along with the necessary metadata for reconstruction. This metadata includes:
- **Optical Magnification**: The magnification factor used during image capture.
- **Sensor Pixel Size**: The physical size of each pixel on the imaging sensor.

### Reconstruction Algorithm

The core of the library is the `reconstruct()` function, which processes an `ImageSeries` to produce a high-resolution image. This function uses the Fourier Ptychography algorithm to synthesize a detailed, high-quality image from the input data.
