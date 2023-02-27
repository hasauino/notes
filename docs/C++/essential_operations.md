# Essential Operations





## Copying

```c++
#include <algorithm>
#include <initializer_list>
#include "spdlog/spdlog.h"

class Vector {
 public:
  Vector(int _size) : size{_size}, elem{new double[_size]} {};
  ~Vector() {
    spdlog::info("destructor..");
    delete[] elem;
  }
  Vector(std::initializer_list<double> elem_)
      : size{static_cast<int>(elem_.size())}, elem{new double[elem_.size()]} {
    std::copy(elem_.begin(), elem_.end(), elem);
  }

  Vector(const Vector& v) : size{v.size}, elem{new double[v.size]} {
    spdlog::info("copy constructor..");
    std::copy(v.elem, v.elem + size, elem);
  }

  const double& operator[](int indx) const { return elem[indx]; }
  double& operator[](int indx) { return elem[indx]; }

  Vector& operator=(const Vector& v) {
    double* temp = new double[v.size];
    std::copy(v.elem, v.elem + v.size, temp);
    delete[] elem;
    elem = temp;
    size = v.size;
    return *this;
  }

 private:
  double* elem;
  int size = 0;
};

int main(int argc, char** argv) {
  Vector v({1.0, 2.0, 3.0});
  Vector vv(v);
  Vector vvv({100, 22, 33, 44, 55});
  vvv = v;
  auto vvvv =
      v;  // this will call copy constructor (if u add "explicit" it will raise an error)
  v[0] = 12345;
  spdlog::info("{}        {}          {}", v[0], vv[0], vvv[0]);
  return 0;
}
```

