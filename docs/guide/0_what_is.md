# What is Fourier Ptychography?

## Introduction

Fourier ptychography is an advanced computational imaging technique that enhances the resolution and imaging capabilities of optical microscopes. By synthesizing data from multiple low-resolution images, it produces high-resolution, gigapixel-scale reconstructions. This method is particularly valuable in applications where high-resolution imaging is required but traditional optical systems are limited by diffraction and hardware constraints.

## Basic Principles

### Light and Imaging

Traditional optical microscopy is constrained by the diffraction limit, which restricts the maximum achievable resolution based on the wavelength of light and the numerical aperture of the lens. To overcome this, Fourier ptychography captures images from multiple angles and uses computational methods to combine these images into a single high-resolution output.

### Image Acquisition

In Fourier ptychography, a series of low-resolution images are captured under different illumination angles. This can be achieved using a light-emitting diode (LED) array or a programmable spatial light modulator to change the angle of the incident light on the sample. Each captured image contains a different set of spatial frequency components of the object being imaged.

### Fourier Transform and Reconstruction

The key to Fourier ptychography lies in the Fourier transform, a mathematical operation that transforms an image from the spatial domain to the frequency domain. In the frequency domain, each low-resolution image corresponds to a small region (or “patch”) of the object’s overall frequency spectrum.

The reconstruction process iteratively combines these patches by overlapping them in the frequency domain, using phase retrieval algorithms to fill in the missing information. Through multiple iterations, the algorithm converges to a high-resolution image that includes both the amplitude and phase information of the object.

### Quantitative Phase Imaging

Unlike traditional microscopy, which primarily captures amplitude information (i.e., the brightness of the image), Fourier ptychography also retrieves quantitative phase information. This is crucial for imaging transparent or semi-transparent samples, such as biological tissues, where phase information reveals structures that are not visible in amplitude-only images.

## Advantages

1. **High Resolution**: By combining data from multiple low-resolution images, Fourier ptychography achieves a resolution beyond the diffraction limit of the objective lens.
2. **Large Field of View**: The technique enables the imaging of large areas (gigapixel scale) without sacrificing resolution.
3. **Quantitative Phase**: Provides phase information without the need for interferometric setups, making it more accessible and less complex.
4. **Cost-Effective**: It transforms low-cost hardware into high-performance imaging systems, reducing the need for expensive, high-resolution optics.

## Applications

Fourier ptychography is particularly useful in biomedical imaging, materials science, and nanotechnology. It enables high-resolution imaging of biological samples, facilitates detailed structural analysis in materials, and provides non-destructive testing capabilities in various fields.
