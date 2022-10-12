# OpenCV



## type

`CV_[The number of bits per item][Signed or Unsigned][Type Prefix]C[The channel number]`



example:

```cpp
#include <opencv2/opencv.hpp>

int main(int argc, char **argv)
{
    cv::Mat black(100, 100, CV_8UC1, cv::Scalar::all(0));
    cv::imshow("viewer", black);
    cv::waitKey(0);
    return 0;
}
```



## Initialization of MAT

- Examples:

```cpp
Mat E = Mat::eye(4, 4, CV_64F);

Mat O = Mat::ones(2, 2, CV_32F);

Mat Z = Mat::zeros(3,3, CV_8UC1);
```

