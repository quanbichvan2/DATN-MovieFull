using AutoMapper;
using WebAPIServer.Modules.MovieManagement.Businesses.HandleHall.Models;
using WebAPIServer.Modules.MovieManagement.Domain.Entities;

namespace WebAPIServer.Modules.MovieManagement.Businesses.HandleHall
{
    public class HallProfile : Profile
    {
        public HallProfile()
        {
            Init();
        }

        private void Init()
        {
            CreateMap<Hall, HallForViewDto>();
            CreateMap<Hall, HallForViewDetailsDto>();
            CreateMap<Seat, SeatForViewDto>()
                .ForMember(x => x.Type, origin => origin.MapFrom(y => y.Type.Code));
                
            CreateMap<HallForCreateDto, Hall>();
            //NOTE: Trong ánh xạ này chỉ định rằng Seats sẽ bị bỏ qua khi ánh xạ từ HallForUpdateDto sang Hall nhờ vào dòng lệnh:
            CreateMap<HallForUpdateDto, Hall>()
                .ForMember(dest => dest.Seats, opt => opt.Ignore());
            CreateMap<SeatForUpdateDto, Seat>();
        }
    }
}
