namespace Coefficent.API.Dtos
{
    public class ProjectForListDto
    {
        public int Id { get; set; }
        public string Icon { get; set; }
        public string Category { get; set; }
        public string Creator { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int TeamSize { get; set; }
        public string ContractLen { get; set; }
        public string CDate { get; set; }
    }
}