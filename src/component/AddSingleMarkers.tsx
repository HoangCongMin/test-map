export const AddSingleMarkers = ({
  locations,
  map,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  map: google.maps.Map | null | undefined;
}) => {
  // Kiểm tra nếu map không null hoặc undefined trước khi thêm markers
  if (map) {
    locations.forEach((position) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: 'Your Marker Title',
      });

      // Tạo một InfoWindow cho mỗi marker
      const infoWindow = new google.maps.InfoWindow({
        content: 'Your custom content here', // Nội dung của popup tùy chỉnh
      });

      // Xử lý sự kiện khi di chuột qua marker
      marker.addListener('mouseover', () => {
        // Mở InfoWindow khi di chuột qua marker
        infoWindow.open(map, marker);
      });

      // Xử lý sự kiện khi di chuột ra khỏi marker
      marker.addListener('mouseout', () => {
        // Đóng InfoWindow khi di chuột ra khỏi marker
        infoWindow.close();
      });
    });
  }
};

