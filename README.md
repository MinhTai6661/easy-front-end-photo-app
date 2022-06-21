# url :
 cd /mnt/e/Thiet-Ke-WEB/easy-frontend/redux/project/photo-app
# url GitBash:
 cd /e/Thiet-Ke-WEB/easy-frontend/redux/project/photo-app

# Bài 4:

chức năng chính của formik:

1. tự dộng lấy dữ liệu của form khi thay đổi một field nào đó trong form
2. Giúp handle onChange, value ,.. (two way binding) cho từng input

Cách dùng FastField:

'<FastField

<!-- props of FastField -->

    name="title"
    component={InputField} // conponent muốn render ra (bao gồm input, label,...)

<!-- props passed to InputFeild -->

    label="Title"
    placeholder="Enter something..."

/>'
