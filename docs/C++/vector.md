# Vector

```cpp
#include <algorithm>
#include <initializer_list>

template <typename T>
class Vector {
   public:
    Vector(int _size) : size{_size}, elem{new T[_size]} {};
    ~Vector() { delete[] elem; }
    Vector(std::initializer_list<T> elem_)
        : size{static_cast<int>(elem_.size())}, elem{new T[elem_.size()]} {
        std::copy(elem_.begin(), elem_.end(), elem);
    }

    Vector(const Vector& v) : size{v.size}, elem{new T[v.size]} {
        std::copy(v.elem, v.elem + size, elem);
    }

    Vector(Vector&& v) : size{static_cast<int>(v.size)}, elem{v.elem} {
        v.elem = nullptr;
        v.size = 0;
    }

    Vector& operator=(const Vector& v) {
        T* temp = new T[v.size];
        std::copy(v.elem, v.elem + v.size, temp);
        delete[] elem;
        elem = temp;
        size = v.size;
        return *this;
    }

    Vector& operator=(Vector&& v) {
        delete[] elem;
        elem = v.elem;
        size = v.size;
        v.size = 0;
        v.elem = nullptr;
    }

    const T& operator[](int indx) const { return elem[indx]; }
    T& operator[](int indx) { return elem[indx]; }

    T* begin() { return elem; }
    T* end() { return elem + size; }

   private:
    T* elem;
    int size = 0;
};
```

